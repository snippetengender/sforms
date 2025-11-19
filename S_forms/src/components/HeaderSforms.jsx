export default function HeaderSForms(){
    return (
   <div style={styles.container}>
      
      {/* Clickable logo */}
      <div style={styles.logo} onClick={() => alert("Logo clicked!")}>
        MyLogo
      </div>

      {/* Right-side buttons */}
      <div style={styles.right}>
        <button style={styles.btn}>Login</button>
        <button style={styles.btn}>Signup</button>
      </div>

    </div>
    );
}

const styles = {
  container: {
    marginTop: "10px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
  },
  logo: {
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
  },
  right: {
    display: "flex",
    gap: "10px",
  },
  btn: {
    padding: "6px 12px",
    cursor: "pointer",
  }
};