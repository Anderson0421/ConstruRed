export function CardDash({ textWin, priceWin, children }: { textWin: string, priceWin: string, children: JSX.Element }) {
    return (
        <div className='bg-slate-950/80 flex items-center justify-between rounded-xl p-4 w-full'>
            <div>
                <h1 className='text-gray-300'>
                    {textWin}
                </h1>
                <p className='font-bold text-xl'>
                    {priceWin}
                </p>
            </div>
            {children}
        </div>
    );
}