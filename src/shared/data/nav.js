import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export const navlinks = [
    {
        id: 1,
        _path: "/",
        _name: "Home"
    },
    {
        id: 2,
        _path: "/about",
        _name: "About"
    },
    {
        id: 3,
        _path: "/blog",
        _name: "Blog"
    },
    {
        id: 4,
        _path: "/shop",
        _name: "Shop"
    }
];

export const navIcons = [
    {
        id: 1,
        icon: FiInstagram,
        _link: "https://instagram.com" 
    },
    {
        id: 2,
        icon: BsYoutube,
        _link: "https://youtube.com"
    },
    {
        id: 3,
        icon: BsFacebook,
        _link: "https://facebook.com"
    },
    {
        id: 4,
        icon: BsTwitter,
        _link: "https://x.com"
    }
];