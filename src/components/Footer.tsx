export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-card-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} kako351. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
