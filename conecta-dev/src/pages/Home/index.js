import React from 'react';
import './style.css';
function Home() {
    return (
        <div>
            <header className='header'>
                <div className='toolbar'>
                    <div className=''>
                        <span>Conecta Dev</span>
                    </div>
                    <div className=''>
                        <button>Novo Post</button>
                        <span>img1</span>
                        <span>img2</span>
                    </div>
                </div>
            </header>
            <main className=''>
                Main
            </main>
        </div>
    )
}

export default Home();