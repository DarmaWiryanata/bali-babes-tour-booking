export function YourActivity(params: { onPreviousStep: () => void }) {
  return (
    <section className="flex justify-between items-center gap-3 mb-3">
      <div className="text-2xl font-bold">Your Activity</div>
      
      <button
        className="btn btn-error btn-outline"
        onClick={params.onPreviousStep}
      >
        Change Your Activity
      </button>
    </section>
  )
}