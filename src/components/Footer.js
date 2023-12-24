import React, { useEffect} from "react";

export default function Footer() {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        import('../css/desktop.css').then(() => {
          console.log('Loaded large screen styles');
        });
      } else {
        import('../css/mobile.css').then(() => {
          console.log('Loaded small screen styles');
        });
      }
    };

    // Initial load
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div id="footer" className="flexRow topmargin">
        {/* navigation provided in footer  */}
        <div id="footnav" className="flexCol">
          <h3>navigation</h3>
          <a href="nk">Home</a>
          <a href="nk">today's deal</a>
          <a href="nk">sell</a>
          <a href="nk">customer support</a>
        </div>

        <div id="footcategory" className="flexCol">
          <h3>Categories</h3>
          <a href="nk">Watches</a>
          <a href="nk">Laptop</a>
          <a href="nk">Mobiles</a>
          <a href="nk">Head Phones</a>
        </div>

        {/* location about physical stores  */}
        <div id="footlocation" className="flexCol">
          <h3>OUr stores</h3>
          <h4>Mumbai</h4>
          <h4>Delhi</h4>
          <h4>Los Angelos</h4>
          <h4>New Yourk</h4>
          <h4>Washington</h4>
        </div>
      </div>
    </>
  );
}
