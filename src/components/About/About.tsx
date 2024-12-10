export const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
              alt="Coding workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate developer with expertise in building modern web applications.
              My journey in tech started 5 years ago, and I've been creating innovative
              solutions ever since.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold mb-2">Frontend</h3>
                <p className="text-gray-600">React, Three.js, GSAP</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Python, SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};