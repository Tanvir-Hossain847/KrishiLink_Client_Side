import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal bg-emerald-700 footer-center text-primary-content p-10">
  <aside>
    <img className='w-20 bg-white rounded-2xl' src="https://i.ibb.co.com/n27cQDZ/Untitled-design-1-removebg-preview.png" alt="" />
<div className="text-white">
    <p className="font-bold">
      KRISHILINK Ltd.
      <br />
      Providing reliable service since 2025
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
</div>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-6">
      <a href="https://www.facebook.com/profile.php?id=61585337956146" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-all">
        <FaFacebook size={28} />
      </a>
      <a href="https://www.linkedin.com/in/tanvir-hossain-2a1b52188/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-all">
        <FaLinkedin size={28} />
      </a>
      <a href="https://github.com/Tanvir-Hossain847" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-all">
        <FaGithub size={28} />
      </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;