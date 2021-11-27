function NewsLetter() {
  return (
    <div className="newsletter">
      <h2>Newsletter</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
        ante...
      </p>
      <form className="email">
        <input type="text" id="email" name="email" placeholder="Your mail" />
        <button>Subscribe</button>
      </form>
    </div>
  );
}

export default NewsLetter;
