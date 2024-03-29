import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};
