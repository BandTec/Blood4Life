import React from 'react';
import { DisappearedLoading } from 'react-loadingg';

export default function Loading() {

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 16777271,
                position: 'absolute',
                wordWrap: 'word-break',
                width: '100vw',
                height: '100vh',
                background: '#00000088'
            }}>
                <div style={{wordWrap: 'word-break', marginBottom: '100px', color: '#FFFFFF' }}>
                    <h1 style={{wordWrap: 'word-break'}}>Carregando</h1>
                    <DisappearedLoading color='#FFFFFF' size='large' speed={0.5} />
                </div>
            </div>
        </>
    );

}