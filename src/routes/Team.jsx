import React from 'react'

const Team = () => {
    return (
        <div className='container w-50'>
            <div id="accordion">
                <div className="card mb-3 t-per">
                    <div className="row g-0" data-bs-toggle="collapse" href="#c0">
                        <div className="img-perfil col-md-4">
                            <img src="/imgs/perfil/carlos.webp" className="img-fluid" alt="Carlos Alexandre" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Carlos Alexandre</h5>
                            </div>
                        </div>
                        <div id="c0" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">Faz programa</div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 t-per">
                    <div className="row g-0" data-bs-toggle="collapse" href="#c1">
                        <div className="img-perfil col-md-4">
                            <img src="/imgs/perfil/jhonatan.png" className="img-fluid" alt="Jhonatan Gobeti" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Jhonatan Gobeti</h5>
                            </div>
                        </div>
                        <div id="c1" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">Empreende</div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 t-per">
                    <div className="row g-0" data-bs-toggle="collapse" href="#c2">
                        <div className="img-perfil col-md-4">
                            <img src="/imgs/perfil/lucas.webp" className="img-fluid" alt="Lucas Daniel" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Lucas Daniel</h5>
                            </div>
                        </div>
                        <div id="c2" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">Pega peso</div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 t-per">
                    <div className="row g-0" data-bs-toggle="collapse" href="#c3">
                        <div className="img-perfil col-md-4">
                            <img src="/imgs/perfil/pedro.jpg" className="img-fluid" alt="Pedro Dezem" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Pedro Dezem</h5>
                            </div>
                        </div>
                        <div id="c3" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">Caçador da Web</div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 t-per">
                    <div className="row g-0" data-bs-toggle="collapse" href="#c4">
                        <div className="img-perfil col-md-4">
                            <img src="/imgs/perfil/pedrin.jpg" className="img-fluid" alt="Pedro Dias" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Pedro Dias</h5>
                            </div>
                        </div>
                        <div id="c4" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">Disk Jockey (DJ)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team