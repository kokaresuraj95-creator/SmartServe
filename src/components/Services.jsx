function Services({ services }) {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <div>
          <span className="section-kicker">WHAT WE OFFER</span>
          <h2>Everything you need to serve better.</h2>
        </div>

        <p>
          From request management to secure collaboration,
          SmartServe keeps your entire service workflow organized.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-number">
              0{index + 1}
            </div>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#requests" className="service-link">
              Explore service
              <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;