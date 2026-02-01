
import React, { useState } from 'react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isEven = index % 2 === 0;

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} border-t border-black py-12 md:py-0`}>
        <div 
          className="w-full md:w-1/2 overflow-hidden h-[400px] md:h-[600px] cursor-pointer group"
          onClick={handleOpen}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        </div>
        <div className={`w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center ${isEven ? 'bg-[#E0D7FF]' : 'bg-[#D6C7FF]'}`}>
          <div className="mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1">
              {project.category}
            </span>
          </div>
          <h3 
            className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-none cursor-pointer hover:opacity-70 transition-opacity"
            onClick={handleOpen}
          >
            {project.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-outline block md:inline' : 'block md:inline'}>
                {word}{' '}
              </span>
            ))}
          </h3>
          <p className="text-sm md:text-base leading-relaxed opacity-80 mb-8 max-w-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase bg-black text-white px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <button 
            onClick={handleOpen}
            className="mt-12 text-[10px] font-bold uppercase tracking-widest self-start border-b border-black pb-1 hover:opacity-50 transition-opacity"
          >
            Launch Project
          </button>
        </div>
      </div>

      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </>
  );
};

export default ProjectItem;
