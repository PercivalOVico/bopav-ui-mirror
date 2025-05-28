
import { Zap, Palette, Users, Code, Workflow, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Create complex creative workflows with our intuitive drag-and-drop interface. No coding required.',
    },
    {
      icon: Palette,
      title: 'Creative Asset Management',
      description: 'Organize, version, and automate your creative assets across all your projects and campaigns.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Automation',
      description: 'Execute thousands of creative tasks in seconds. Scale your creative output without limits.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools that keep your creative teams in sync and productive.',
    },
    {
      icon: Code,
      title: 'Custom Integrations',
      description: 'Connect with 500+ tools and platforms. Build custom integrations with our powerful API.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, SSO, and advanced permission controls.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              automate creativity
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From simple tasks to complex workflows, Bopav Studios provides the tools 
            and flexibility to transform how your team creates and collaborates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
