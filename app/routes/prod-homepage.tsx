import { useState, useEffect } from "react";
import ProdNavbar from "~/components/Navbar/prod-navbar";
import Footer from "~/components/Footer/Footer";
import ProjectSwipe from "./producer-swipe";
import { NavLink, useNavigate } from "react-router";


// Mock data interfaces
interface Project {
  id: string;
  name: string;
  season: string;
  status: "active" | "planning" | "completed";
  applicants: number;
  matches: number;
}

interface StatCard {
  title: string;
  value: number;
  change: number;
  icon: React.ReactNode;
}

export default function ProducerHomepage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch projects (mock data)
  useEffect(() => {
    setTimeout(() => {
      setProjects([
        { 
          id: "farmen-2026", 
          name: "Farmen", 
          season: "2026", 
          status: "planning", 
          applicants: 427, 
          matches: 16 
        },
        { 
          id: "paradise-hotel-2025", 
          name: "Paradise Hotel", 
          season: "2025", 
          status: "active", 
          applicants: 684, 
          matches: 28 
        },
        { 
          id: "kompani-lauritzen-2025", 
          name: "Kompani Lauritzen", 
          season: "2025", 
          status: "active", 
          applicants: 352, 
          matches: 12 
        },
        { 
          id: "71-nord-2025", 
          name: "71° Nord", 
          season: "2025", 
          status: "planning", 
          applicants: 210, 
          matches: 0 
        },
        { 
          id: "ex-on-the-beach-2024", 
          name: "Ex on the Beach", 
          season: "2024", 
          status: "completed", 
          applicants: 572, 
          matches: 24 
        }
      ]);
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ProdNavbar />
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Project Sidebar */}
        <aside className="w-full md:w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 bg-white">
            <h2 className="text-lg font-bold text-gray-800">Your Projects</h2>
          </div>
          
          {isLoading ? (
            <div className="p-4 flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600"></div>
            </div>
          ) : (
            <div className="py-2">
              {projects.map(project => (
                <NavLink
                  key={project.id}
                  to={`/producer/swipe/${project.id}`}
                  className={({ isActive } : {isActive:boolean}) => 
                    `block px-4 py-3 border-l-4 transition-all ${
                      isActive 
                        ? "border-orange-600 bg-orange-50" 
                        : "border-transparent hover:bg-gray-100"
                    }`
                  }
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-gray-900">{project.name}</span>
                      <span className="ml-2 text-sm text-gray-500">{project.season}</span>
                    </div>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.status === "active" 
                          ? "bg-green-100 text-green-800" 
                          : project.status === "planning" 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.status === "active" ? "Active" : 
                       project.status === "planning" ? "Planning" : "Completed"}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <span>{project.applicants} applicants</span>
                    <span className="mx-1">•</span>
                    <span>{project.matches} matches</span>
                  </div>
                </NavLink>
              ))}
              
              <div className="p-4">
                <button className="w-full p-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  New Project
                </button>
              </div>
            </div>
          )}
        </aside>
        
        {/* Main Content */}
        <main className="flex-grow">
            {/* Main content conditional rendering */}
            {(() => {
            // Extract path from URL if needed
            const path = window.location.pathname;
            const projectId = path.startsWith('/producer/swipe/') 
              ? path.replace('/producer/swipe/', '') 
              : null;
            
            // Render appropriate content based on path
            if (path.includes('/producer/swipe/') && projectId) {
              return <ProjectSwipe projectId={projectId} />;
            } else if (path.includes('/producer/profile')) {
              return <ProducerProfile />;
            } else {
              // Default view is dashboard
              return <DashboardContent projects={projects} isLoading={isLoading} />;
            }
            })()}
        </main>
      </div>
      <Footer />
    </div>
  );
}

// Dashboard content with statistics and charts
function DashboardContent({ projects, isLoading }: { projects: Project[], isLoading: boolean }) {
  // Calculate total applicants and matches
  const totalApplicants = projects.reduce((sum, p) => sum + p.applicants, 0);
  const totalMatches = projects.reduce((sum, p) => sum + p.matches, 0);
  const activeProjects = projects.filter(p => p.status === "active").length;
  
  // Stat cards data
  const statCards: StatCard[] = [
    {
      title: "Total Applicants",
      value: totalApplicants,
      change: 12.5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Potential Matches",
      value: totalMatches,
      change: 8.2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Active Projects",
      value: activeProjects,
      change: 0,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Conversion Rate",
      value: Math.round((totalMatches / totalApplicants) * 100),
      change: -2.3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  if (isLoading) {
    return (
      <div className="p-8 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Producer Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your projects.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-3 bg-gray-50">{stat.icon}</div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.title.includes("Rate") ? `${stat.value}%` : stat.value}
                  </p>
                  <span className={`ml-2 text-sm font-medium ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change >= 0 ? '+' : ''}{stat.change}%
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className={`h-2.5 rounded-full ${
                index === 0 ? 'bg-blue-500' : 
                index === 1 ? 'bg-green-500' : 
                index === 2 ? 'bg-orange-500' : 'bg-purple-500'
              }`} style={{ width: '70%' }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Overview */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Projects Overview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicants</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matches</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{project.name}</div>
                    <div className="text-sm text-gray-500">{project.season}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      project.status === "active" 
                        ? "bg-green-100 text-green-800" 
                        : project.status === "planning" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {project.applicants}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {project.matches}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <NavLink
                      to={`/producer/swipe/${project.id}`}
                      className="text-orange-600 hover:text-orange-900"
                    >
                      View
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-start border-b border-gray-100 pb-4">
              <div className="rounded-full bg-orange-100 p-2 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-800">
                  {i === 0 ? 'New application for Paradise Hotel 2025 from Thomas B.' :
                   i === 1 ? 'You marked 5 candidates as potential matches for Farmen 2026' :
                   i === 2 ? 'Added new project "71° Nord 2025"' :
                   'System detected 8 new high-match candidates for Kompani Lauritzen'}
                </p>
                <p className="text-xs text-gray-500 mt-1">{i === 0 ? '23 minutes ago' : i === 1 ? '2 hours ago' : i === 2 ? 'Yesterday' : '2 days ago'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Placeholder for Producer Profile
function ProducerProfile() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Company Profile</h1>
      <p>Profile editing functionality would go here, similar to the cast profile edit form.</p>
    </div>
  );
}