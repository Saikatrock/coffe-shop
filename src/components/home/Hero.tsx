import Button from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

export default function Hero() {
  return (
    







    
       <section className="relative min-h-screen bg-[url('https://i.pinimg.com/1200x/5c/30/8b/5c308b3a6f58ec59d6f2f90c515e2f50.jpg')] md:bg-[url('https://i.pinimg.com/1200x/5c/30/8b/5c308b3a6f58ec59d6f2f90c515e2f50.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60"></div>
      <div className="mx-auto grid absolute  top-50 left-8  md:block  max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 md:grid-cols-2 ">


    
      
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Welcome to {siteConfig.name}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your daily dose of <span className="text-amber-800">good coffee</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-taupe-100">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/menu">View menu</Button>
            <Button to="/contact" variant="outline">
              Find us
            </Button>
         
        

        
        </div>
      </div>
    </section>
  );
}
