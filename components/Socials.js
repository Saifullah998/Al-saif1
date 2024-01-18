//links
import Link from "next/link";
//icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookBoxLine, RiDribbbleLine, RiPinterestLine, RiLinkedinBoxLine } from 'react-icons/ri'
import {BiLogoUpwork} from 'react-icons/bi'
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
  <Link href={''} target="_blank" className="hover:text-accent transition-all duration-300" >
    <RiLinkedinBoxLine/>
  </Link>
    <Link href={''} target='_blank' className="hover:text-accent transition-all duration-300">
      <BiLogoUpwork />
    </Link>
    <Link href={''} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    {/* <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiFacebookBoxLine />
    </Link> */}
    {/* <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiDribbbleLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiPinterestLine />
    </Link> */}
  </div>;
};

export default Socials;
