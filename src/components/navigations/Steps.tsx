export function Steps(params: {
  currentstep: number
  list: string[]
}) {
  return (
    <section className="flex justify-center">
      <ul className="steps font-bold">
        {params.list.map((item, key) => (
          <li
            key={key}
            className={`step ${key <= params.currentstep && "step-primary"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}