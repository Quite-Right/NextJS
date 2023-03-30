import Image from "next/image"
import imgPlaceholder from '@/../public/1.jpg'

export default function PetsPage() {
    return <>
        <h1>Pets page</h1>
        <Image placeholder="blur" src={imgPlaceholder} alt='pet' width={280} height={420} />
        <div>
            {['1', '2', '3', '4', '5'].map(petId => <div key={petId}>
                <Image src={`/${petId}.jpg`} alt='pet' width={280} height={420} />
            </div>)}
        </div>
    </>
}