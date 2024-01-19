import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/gishe.png';
import cryptoImg from '../public/assets/projects/i-motion.png'
import netflixImg from '../public/assets/projects/paraf.png'
import twitchImg from '../public/assets/projects/formBuilder.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='gisheh7'
            backgroundImg={propertyImg}
            projectUrl='/gisheh'
            tech='Next JS'
          />
          <ProjectItem
            title='i-motion'
            backgroundImg={cryptoImg}
            projectUrl='/i-motion'
            tech='Next JS'

          />
          <ProjectItem
            title='Paraf Pwa App'
            backgroundImg={netflixImg}
            projectUrl='/paraf'
            tech='Next JS'

          />
          <ProjectItem
            title='Form Builder'
            backgroundImg={twitchImg}
            projectUrl='/form-builder'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
