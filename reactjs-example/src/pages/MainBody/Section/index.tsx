type SectionPropsType = {
  children: React.ReactNode;
  sectionId: string;
  title: string;
};

const Section = (props: SectionPropsType): JSX.Element => {
  const { children, sectionId, title } = props;

  return (
    <section id={sectionId} className={`section section-${sectionId}`}>
      <div className={`container section-${sectionId}__container`}>
        <h2 className={`section-title section-${sectionId}__section-title`}>
          {title}
        </h2>
        <div className={`section-body section-${sectionId}__section-body`}>
          {children}
        </div>
      </div>
    </section>
  );
};
export default Section;
