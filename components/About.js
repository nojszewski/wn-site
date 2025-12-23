export default function About() {
  const skillCategories = [
    {
      title: 'DevOps & Infrastructure',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Proxmox', 'Ansible'],
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean'],
    },
    {
      title: 'Programming',
      skills: ['JavaScript', 'Python', 'TypeScript'],
    },
    {
      title: 'Monitoring & Security',
      skills: ['Zabbix', 'Grafana', 'InfluxDB', 'Security Hardening'],
    },
    {
      title: 'Containerization',
      skills: ['Docker', 'Docker Compose'],
    },
    {
      title: 'System Administration',
      skills: ['Linux', 'Windows Server', 'Networking', 'MikroTik', 'Ubiquiti', 'Load Balancing'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            O mnie
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            DevOps engineer zapalony do automatyzacji, infrastruktury jako kodu i budowania niezawodnych, skalowalnych systemów. Łączę świat developmentu i operacji, aby dostarczać bezproblemowe wdrażania i utrzymywać solidną infrastrukturę.
          </p>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-2"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}