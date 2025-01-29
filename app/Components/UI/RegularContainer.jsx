export default function RegularContainer({children, classname}) {
    return (
      <section className={`flex flex-col gap-16 w-full ${classname}`}>
          <div className="container m-auto">
              {children}   
          </div>
      </section>
    )
  }
  