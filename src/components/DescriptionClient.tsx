export const DescriptionClient = () => {

  const walkZone = globalThis.window?.location?.search?.split('page=')[1];

  return (
    <h1>{walkZone}</h1>
  )
}
