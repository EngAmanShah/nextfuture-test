export default function Loading() {
  return (
    <section style={styles.routeLoading} aria-label="Page loading" aria-busy="true">
      <div style={styles.loadingShell}>
        <div style={styles.loadingHero} />
        <div style={styles.loadingGrid}>
          <div style={styles.loadingCard} />
          <div style={styles.loadingCard} />
          <div style={styles.loadingCard} />
        </div>
      </div>
    </section>
  );
}

const shimmerBackground =
  "linear-gradient(90deg, #d9e8f5 0%, #eef5fb 45%, #d9e8f5 100%)";

const styles = {
  routeLoading: {
    minHeight: "calc(100vh - 88px)",
    padding: "112px 24px 48px",
    background: "linear-gradient(180deg, #f8fbff 0%, #eef5fb 100%)",
  },
  loadingShell: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  loadingHero: {
    height: "clamp(220px, 34vw, 360px)",
    marginBottom: "28px",
    borderRadius: "28px",
    background: shimmerBackground,
    backgroundSize: "200% 100%",
  },
  loadingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  loadingCard: {
    height: "180px",
    borderRadius: "28px",
    background: shimmerBackground,
    backgroundSize: "200% 100%",
  },
};
