'use client';

export default function HomePage() {
  return (
    <main>
      <section
        style={{
          minHeight: '90vh',
          backgroundImage: 'url("/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '2rem',
          position: 'relative',
        }}
      >
        <div style={{ zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Enhanced Emergency Response,</h1>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Tailored for Santa Barbara, Iloilo</h1>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: '400',
              maxWidth: '690px',
              margin: '0 auto',
            }}
          >
            EMERGE is an emergency management system that visualizes hazards, analyzes risk zones, and optimizes
            resource allocation using a clustering algorithm—empowering responders and protecting communities.
          </p>
        </div>

        <button className="cta-button" onClick={() => (window.location.href = '/risk-map')}>
          View Risk Map
        </button>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 0,
          }}
        ></div>

        <style jsx>{`
          .cta-button {
            background-color: #dde1e4;
            color: #b92727;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 1rem;
            cursor: pointer;
            margin-top: 3rem;
            border: none;
            transition: all 0.3s ease;
            z-index: 1;
          }

          .cta-button:hover {
            background-color: #b92727;
            color: white;
          }
        `}</style>
      </section>
    </main>
  );
}
