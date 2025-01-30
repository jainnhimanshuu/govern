import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 width-20">
                <div className="mb-10">
                  <img src="assets/imgs/template/logo.svg" alt="GreenGoverse" />
                </div>
                <p className="font-md mb-20 color-grey-400">
                  Andheri.
                  <br className="d-none d-lg-block" />
                  Mumbai, Maharashtra 40001
                </p>
                <div className="font-md mb-20 color-grey-400">
                  <strong className="font-md-bold">Hours:</strong> 10:00 -
                  19:00, Mon - Fri
                </div>
                <h6 className="color-brand-1">Follow Us</h6>
                <div className="mt-15">
                  <Link className="icon-socials icon-facebook" href="#" />
                  <Link className="icon-socials icon-instagram" href="#" />
                  <Link className="icon-socials icon-twitter" href="#" />
                  <Link className="icon-socials icon-linkedin" href="#" />
                  <Link className="icon-socials icon-youtube" href="#" />
                </div>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">About Us</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="/about">Mission &amp; Vision</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Press &amp; Media</Link>
                  </li>
                  <li>
                    <Link href="#">Advertising</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">Ressources</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="#">Solutions</Link>
                  </li>
                  <li>
                    <Link href="#">Customers</Link>
                  </li>
                  <li>
                    <Link href="#">News &amp; Events</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Support</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">We offer</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="#">Project software</Link>
                  </li>
                  <li>
                    <Link href="#">Resource software</Link>
                  </li>
                  <li>
                    <Link href="#">Workflow automation</Link>
                  </li>
                  <li>
                    <Link href="#">Gantt chart makers</Link>
                  </li>
                  <li>
                    <Link href="#">Project dashboards</Link>
                  </li>
                  <li>
                    <Link href="#">Task software</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-23">
                <p className="font-sm color-grey-400 mb-10">
                  Secured Payment Gateways
                </p>
                <img
                  src="assets/imgs/template/payment-method.png"
                  alt="GreenGoverse"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div className="container">
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                  <ul className="menu-bottom">
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Cookies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Terms of service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                  <span className="color-grey-300 font-md">
                    ©GreenGoverse Official 2022. All right reversed.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
