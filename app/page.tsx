export default function Home() {
  return (
    <div className="font-space-grotesk">
      <h1 className="text-4xl font-bold text-brand-blue">
        Welcome to 10 Minute School
      </h1>
      <p className="text-lg ">
        A platform for learning and sharing knowledge. Join us to explore a wide
        range of educational resources and connect with a community of learners.
      </p>
      <footer className="text-sm text-gray-400">
        © {new Date().getFullYear()} 10 Minute School
      </footer>
    </div>
  );
}
