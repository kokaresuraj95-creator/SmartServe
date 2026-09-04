function Services({ services }) {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <div className="section-tag">What We Offer</div>
        <h2>Everything you need to serve better.</h2>
        <p>
          From request management to secure collaboration,
          SmartServe keeps your entire service workflow organized.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#requests" className="service-link">
              Learn More <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;