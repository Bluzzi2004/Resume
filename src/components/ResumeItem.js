export default function ResumeItem({
  name,
  dept,
  position,
  startDate,
  endDate,
  children
}) {
  return (
    <section>
      <h3>
        {name} | {dept}
      </h3>
      <h4>
        Member of Technical Staff <time>2017 - 2019</time>
      </h4>
      {children}
    </section>
  );
}
