function Services({ services }) {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <div className="section-eyebrow">WHAT WE OFFER</div>
        <h2>Everything you need to serve better.</h2>
        <p>
          From request management to secure collaboration,
          SmartServe keeps your entire service workflow organized.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;