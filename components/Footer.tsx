const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AAPG RGIPT SC</h3>
            <p className="text-sm">Promoting geoscience education and research at RGIPT.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Rajiv Gandhi Institute of Petroleum Technology</p>
            <p className="text-sm flex items-center gap-2">
              Jais, Amethi, Uttar Pradesh, India
              <a 
                href="https://maps.app.goo.gl/2FmZwSR9nWyAzXoD7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                📍
              </a>
            </p>
            <p className="text-sm mt-2">Email: <a href="mailto:aapg@rgipt.ac.in" className="text-blue-400 hover:underline">aapg@rgipt.ac.in</a></p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} AAPG RGIPT SC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
