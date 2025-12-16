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
                            Profissional com quatro anos de experiência em
                            desenvolvimento de sistemas, focado no
                            desenvolvimento contínuo de micro serviços para um
                            webphone PBX, o domínio principal do negócio, que
                            atua como núcleo de integração com diversas APIs
                            internas, externas e CRMs de terceiros. Utilizando a
                            arquitetura de API Gateway para garantir a
                            distribuição eficiente de serviços e a comunicação
                            fluida entre diferentes sistemas.
                        </p>
                        <p className="mb-4">
                            Além disso, sou responsável pelo desenvolvimento de
                            micro serviços internos, como o sistema de
                            permissionamento, assegurando segurança e controle
                            de acesso rigorosos. Minha atuação também inclui a
                            integração com APIs externas de plataformas como
                            Salesforce, Zendesk e Hubspot, facilitando a
                            sincronização de dados e proporcionando uma
                            experiência integrada e eficiente para os usuários.
                        </p>
                        <p className="mb-4">
                            Com expertise em tecnologias como{' '}
                            <b>
                                <i>
                                    React.JS, Angular.JS, Redux, Webpack,
                                    Node.js, TypeScript, SQL, NoSQL, MongoDB,
                                    Apache Kafka e Socket.io{' '}
                                </i>
                            </b>
                            , minha atuação abrange a integração de micro
                            serviços, garantindo eficiência e escalabilidade.
                            Minhas responsabilidades incluem o desenvolvimento
                            de novas integrações solicitadas pela área de
                            negócios, implementação de melhorias, correções de
                            bugs, refatoração de sistemas legados, testes
                            automatizados e análise de logs. Trabalho em
                            ambiente ágil (Scrum), comprometido com a otimização
                            contínua e a entrega de soluções de alta qualidade.
                        </p>
                        <p className="mb-4">
                            Habilidades:{' '}
                            <b>
                                <i>
                                    HTML, CSS, JavaScript, Typescript, React,
                                    Next.JS, Redux, Tailwind, Python, Java,
                                    Spring Boot, Django, Node.js, Express, SQL,
                                    PostgreSQL, MongoDB, SQLite, Docker, Scrum,
                                    Kanban, DDD, TDD, SOLID, Inglês avançado -
                                    Certificação ICAO Level 4.
                                </i>
                            </b>
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
