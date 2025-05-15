import { useEffect, useState } from "react"

interface Projects {
  id: number,
  title: string,
  description: string
}

export default function SelectedWork () {
  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Failed to fetch projects:', error);
      });
  }, []);

  return (
    <div>
      <h1>Selected work</h1>
      <ul className="grid grid-cols-2 gap-4">
        {projects.map((project, id) => (
          <li key={id}>
            <div className="bg-red-500 h-24"></div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}