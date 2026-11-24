function Home() {
  return (
    <div className="page">
      <section className="intro">
        <img
          className="photo"
          src="/photo.jpg"
          alt="my photo"
          onError={(e) => (e.target.style.visibility = 'hidden')}
        />
        <div>
          <h1>David Sooraj Samuel C H</h1>
          <p className="muted">BSc Computer Science student</p>
          <p className="muted">Loyola College, Chennai</p>
        </div>
      </section>

      <section>
        <h2>About</h2>
        <p>
          I am a passionate computer science student with a keen interest in web development, and I am always eager to learn new things and I also like to understand what happens behind everything. I am still exploring what i love in this tech field.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills">
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <div className="row">
          <div>
            <strong>Class 12</strong>
            <p className="muted">Bethel Matriculation Higher Secondary School, State Board</p>
          </div>
          <span>70.1%</span>
        </div>
        <div className="row">
          <div>
            <strong>Class 10</strong>
            <p className="muted">Bethel Matriculation Higher Secondary School, State Board</p>
          </div>
          <span>88%</span>
        </div>
      </section>
    </div>
  )
}

export default Home
