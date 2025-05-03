import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {

	return (
		<main>
			<Header/>
			<Hero/>
			<button className="text-white bg-gradient-to-tr from-[#363636] via-[#eaeaea] to-pink-700 text-2xl rounded-full px-6 py-3 hover:text-black hover:bg-blue-50"> Contact</button>
		</main>
  );
}
