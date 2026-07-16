import SectionHeader from './SectionHeader'
import { projects } from '../data/resumeData'
import ArrowRightFillIcon   from 'remixicon-react/ArrowRightFillIcon';
import {useState} from "react" 

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

 
 const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig="FIG. 03" title="Projects" />

        <div className="grid gap-6">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group border border-line bg-raised p-6 hover:border-trace/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="font-mono text-[11px] text-inkMuted">
                  {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </p>
                <span className="font-mono text-[11px] text-signal">{p.date}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-ink mb-1">{p.name}</h3>
              <p className="font-mono text-[11px] text-inkMuted mb-4">
                {p.role} · {p.company}
              </p>


              <div className="flex flex-col items-start lg:flex-row-reverse justify-between gap-5">
                <div className='flex justify-center max-w-96 xl:max-w-[1024px] mx-auto lg:mr-0 overflow-hidden'>
                  {p.view.image_url && <img 
                    src={p.view.image_url} 
                    onClick={() => openModal(p.view)}
                    className=' w-full h-auto object-cover  cursor-pointer hover:opacity-80 transition-opacity' alt="product image"  
                  />}
                </div>
                <ul className="space-y-2 mb-6 w-full lg:max-w-2xl ">
                  <p className="text-inkMuted text-sm leading-relaxed mb-5">{p.description}</p>
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-ink/90 text-sm leading-relaxed">
                      <span className="text-trace font-mono shrink-0">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <br />

              <div className="flex justify-between flex-col lg:flex-row gap-10">
                <div className='flex flex-wrap gap-2 items-center'>
                  {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] tracking-wide text-trace border border-trace/30 px-2 py-0.5 h-fit"
                  >
                    {s}
                  </span>
                ))}
                </div>
                <div className='flex justify-center'>
                  {p.view.address && <a  href={p.view.address} target="_blank" rel="noreferrer"className='text-trace border px-3 py-2 rounded border-trace hover:bg-trace hover:text-black ' >{p.view.title}</a>}
                  {!p.view.address && <a className='btn btn-primary text-trace border px-3 py-2 rounded border-trace hover:bg-trace hover:text-black disabled' aria-disabled="true" href={p.link}>{p.view.title}</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

       {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal}
        >
          <button
              onClick={closeModal}
              className="fixed top-1 right-2 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
          </button>
          <div 
            className="relative max-w-5xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <img
              src={selectedImage?.image_url}
              alt={selectedImage?.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Close Button */}
            
          </div>
        </div>
      )}
    </section>
  )
}
