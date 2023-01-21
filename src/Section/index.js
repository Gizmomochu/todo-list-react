import "./style.css";

const Section = ({title, body, extraDivContent}) => (
    <section className="section">
    <div className="section__div">
        <h3 className="section__header">{title}</h3>
        {extraDivContent}
    </div>

    <div className="section__container">

        {body}
    </div>
</section>
);

export default Section;