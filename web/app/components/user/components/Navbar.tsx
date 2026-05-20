export default function Navbar() {
  return (
    <nav
      className="
      flex flex-col md:flex-row 
      gap-6 
      text-sm uppercase tracking-widest
      items-center
    "
    >
      <div className="cursor-pointer hover:text-yellow-500">home</div>
      <div className="cursor-pointer hover:text-yellow-500">blog</div>
      <div className="cursor-pointer hover:text-yellow-500">Shop</div>
      <div className="cursor-pointer hover:text-yellow-500">Contact</div>
    </nav>
  );
}
