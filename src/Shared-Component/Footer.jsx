const Footer = () => {
  return (
    <div>
      <footer className=" bg-slate-900 py-10 text-base-content">
        <div className=" flex justify-between text-white flex-wrap max-w-7xl mx-auto ">
          <aside>
            <div className="flex items-center">
              <h1 className="font-bold text-5xl text-sky-600">I</h1>
              <span className="text-4xl text-white font-bold">
                .blo<span className="text-sky-600">G</span>
              </span>
            </div>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav className="flex flex-col">
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col">
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
