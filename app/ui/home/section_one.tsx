export default function SectionOne() {
    return (
        <div className="flex h-170 w-full items-center justify-center">
            <div className="flex h-auto w-full max-w-6xl flex-col items-stretch gap-6 p-4 md:h-137.5 md:flex-row md:p-0">
                <div className="border-strokes custom-scrollbar bg-cards relative h-96 w-full grow overflow-y-auto border-4 md:h-full">
                    <div className="mx-auto flex w-4/5 flex-col py-8">
                        <h3 className="text-button mb-4 text-3xl font-extrabold">
                            Sobre mim.
                        </h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis eleifend ultricies felis et tempor.
                            Aenean nisi diam, laoreet id euismod quis, tincidunt
                            a est. Fusce egestas ligula id leo ornare gravida.
                            Quisque condimentum orci ut odio cursus, gravida
                            posuere ante condimentum. Proin lobortis, lorem non
                            tristique ultrices, odio justo aliquet nibh, vitae
                            tempor lectus libero sit amet mauris. Quisque
                            blandit dui odio, vestibulum luctus massa dictum id.
                            Aliquam sit amet lacus ultrices, faucibus dui eget,
                            accumsan lectus.
                        </p>
                        <p>
                            Etiam posuere at nunc ac egestas. Quisque nec ipsum
                            aliquam, mollis nunc vel, commodo lectus. Mauris
                            ullamcorper sit amet sem at imperdiet. Pellentesque
                            quis vestibulum urna. Fusce pretium, risus vel
                            euismod cursus, purus lorem suscipit lorem, vel
                            ultricies diam purus sit amet purus. Nam venenatis
                            mi eget imperdiet sodales. Nulla justo lorem,
                            aliquam vitae varius a, pellentesque at odio.
                        </p>
                    </div>
                </div>
                <div className="border-strokes bg-cards flex h-auto w-full shrink-0 flex-col justify-center border-4 py-8 md:h-full md:w-1/3">
                    <div className="mx-auto flex h-full w-4/5 flex-col sm:items-baseline">
                        <h3 className="text-button mb-2 text-3xl font-extrabold">
                            Artigos Recentes
                        </h3>
                        <ul className="list-inside list-disc space-y-2 font-bold">
                            <li>Idéia sobre um blog pessoal...</li>
                            <li>Como escolher qual a melhor stack...</li>
                            <li>A resposta para a vida...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
