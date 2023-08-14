type SectionPropsType = {
  children: React.ReactNode;
  sectionId: string;
  title: string;
};

const Section = (props: SectionPropsType): JSX.Element => {
  return (
    <section
      id={props.sectionId}
      className={`section section-${props.sectionId}`}
    >
      <div className={`container section-${props.sectionId}__container`}>
        <h2
          className={`section-title section-${props.sectionId}__section-title`}
        >
          {props.title}
        </h2>
        <div
          className={`section-body section-${props.sectionId}__section-body`}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
};
export default Section;
