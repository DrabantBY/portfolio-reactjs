type SectionPropsType = { children: React.ReactNode; sectionId: string };

const Section = ({ children, sectionId }: SectionPropsType): JSX.Element => {
  return (
    <section id={sectionId} className={`section section-${sectionId}`}>
      <div className={`container section-${sectionId}__container`}>
        {children}
      </div>
    </section>
  );
};
export default Section;
