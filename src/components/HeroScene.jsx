import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Sparkles } from '@react-three/drei';
import { MathUtils } from 'three';

function FloatingServiceCore() {
  const coreRef = useRef(null);
  const autoRotation = useRef(0);

  useFrame(({ pointer, size }, delta) => {
    if (!coreRef.current) return;

    const core = coreRef.current;
    autoRotation.current += delta * 0.16;
    core.rotation.y = MathUtils.damp(core.rotation.y, autoRotation.current + pointer.x * 0.34, 3.5, delta);
    core.rotation.x = MathUtils.damp(core.rotation.x, -pointer.y * 0.24, 3.5, delta);
    core.scale.setScalar(size.width < 480 ? 0.78 : 1);
  });

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.22}>
      <group ref={coreRef}>
        <RoundedBox args={[1.5, 1.5, 1.5]} radius={0.24} smoothness={5}>
          <meshPhysicalMaterial
            color="#7771f3"
            metalness={0.42}
            roughness={0.2}
            clearcoat={0.9}
            clearcoatRoughness={0.16}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.77]}>
          <torusGeometry args={[0.3, 0.035, 12, 48]} />
          <meshStandardMaterial color="#bafbf1" emissive="#34d399" emissiveIntensity={0.65} />
        </mesh>
        <mesh position={[0, 0, 0.8]}>
          <sphereGeometry args={[0.105, 24, 24]} />
          <meshStandardMaterial color="#e8fff9" emissive="#34d399" emissiveIntensity={1.1} />
        </mesh>

        <mesh rotation={[0.94, 0.28, -0.35]}>
          <torusGeometry args={[1.3, 0.018, 8, 96]} />
          <meshBasicMaterial color="#73e8e0" transparent opacity={0.82} />
        </mesh>
        <mesh rotation={[-0.42, 0.8, 0.82]}>
          <torusGeometry args={[1.48, 0.012, 8, 96]} />
          <meshBasicMaterial color="#c4a7ff" transparent opacity={0.68} />
        </mesh>
        <mesh position={[1.23, 0.4, 0.1]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#f6b96b" emissive="#f97316" emissiveIntensity={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={1.25} />
      <directionalLight position={[3, 4, 5]} intensity={2.1} color="#e7fffb" />
      <pointLight position={[-3, -1, 2]} intensity={1.3} color="#9a8cff" />
      <FloatingServiceCore />
      <Sparkles count={18} scale={4.2} size={2} speed={0.25} color="#a8fff0" opacity={0.5} />
    </>
  );
}

function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = (event) => setReducedMotion(event.matches);

    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 5], fov: 38 }}
      className="hero-canvas"
      dpr={[1, 1.35]}
      frameloop={reducedMotion ? 'demand' : 'always'}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
    >
      <SceneContents />
    </Canvas>
  );
}

export default HeroScene;