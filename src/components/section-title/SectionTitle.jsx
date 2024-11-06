const SectionTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-4xl text-center mb-3">
        {title}
      </h2>
      <h3 className="text-center">{subtitle}</h3>
    </div>
  );
};

export default SectionTitle;
