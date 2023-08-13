type IframePropsType = {
  link: string;
};

const Iframe = (props: IframePropsType): JSX.Element => {
  return <iframe title={props.link} src={props.link} frameborder='0' />;
};

export default Iframe;
