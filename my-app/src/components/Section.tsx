interface SectionProps {
  title: string;
  description: string;
  titleClass?: string;
  descriptionClass?: string;
}

export const Section = ({ title, description, titleClass = "section-title", descriptionClass = "section-description" }: SectionProps) => {
  return (
    <div>
      <h2 className={titleClass}>{title}</h2>
      <p className={descriptionClass}>{description}</p>
    </div>
  );
};