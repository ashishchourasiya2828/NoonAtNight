import React from 'react'
import  Button  from  "./Button.jsx";
const Navbar = () => {
  return (
    <div className='px-10 py-2 flex itmes-center justify-between bg-[#E4E4E4]'>
        <svg className='' xmlns="http://www.w3.org/2000/svg" width="140px" height="70px" viewBox="0 0 192 30" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<g clipPath="url(#clip0_501_267)">
<path d="M28.9365 7.22506C30.6729 7.22506 32.0805 5.81515 32.0805 4.07594C32.0805 2.33673 30.6729 0.926819 28.9365 0.926819C27.2001 0.926819 25.7925 2.33673 25.7925 4.07594C25.7925 5.81515 27.2001 7.22506 28.9365 7.22506Z" fill="currentColor"></path>
<path d="M23.8487 1.34818V1.21697H18.3546V1.35557C18.3715 1.44798 18.4595 1.71779 18.5831 2.08741C19.1055 3.65458 20.3283 7.3267 20.3283 10.692V18.101C20.3283 18.9511 19.1916 19.2597 18.7516 18.5297L8.54808 1.62354C8.39453 1.37036 8.11927 1.21512 7.81966 1.21512H0.863137V1.28165C0.874373 1.32415 0.943657 1.51266 1.03167 1.75291C1.4455 2.87654 2.41548 5.50635 2.41548 7.92178V20.0174C2.41548 23.3828 1.19083 27.0549 0.670265 28.6221C0.544804 28.9991 0.453049 29.2726 0.439941 29.3595V29.4907H5.96958V29.3447C5.9546 29.2911 5.88531 29.0878 5.78794 28.8069C5.28797 27.3617 3.96033 23.5195 3.96033 20.0156V9.3448C3.96033 8.49653 5.09323 8.18606 5.53515 8.9142L17.8209 29.0841C17.9745 29.3354 18.2498 29.4907 18.5475 29.4907H21.0249C21.493 29.4907 21.8731 29.1155 21.8731 28.6535V10.6902C21.8731 7.32486 23.0959 3.65273 23.6184 2.08556C23.7438 1.70855 23.8356 1.43504 23.8487 1.34818Z" fill="currentColor"></path>
<path d="M61.4194 9.39839C55.8411 9.39839 52.2383 13.4124 52.2383 19.6238C52.2383 26.7038 56.9421 29.9287 61.3145 29.9287C65.6869 29.9287 68.4283 26.7869 69.3534 23.8466L69.3141 23.8134C67.2936 25.2734 65.7974 25.8444 63.9941 25.8444C60.8426 25.8444 59.0207 23.6212 58.5787 19.2394L58.5694 19.1377H68.8403C69.329 19.1377 69.7204 18.7293 69.6904 18.247C69.4039 13.8042 67.1213 9.40024 61.4213 9.40024L61.4194 9.39839ZM58.5169 18.3948L58.5057 18.2876C58.4701 17.9273 58.4701 17.5262 58.4701 17.1714C58.4477 15.2586 58.663 12.7305 59.8277 11.5514C60.2453 11.1282 60.7565 10.9138 61.3482 10.9138C63.1365 10.9138 64.0316 12.858 64.084 16.8554V16.9275L58.5169 18.3967V18.3948Z" fill="currentColor"></path>
<path d="M34.2395 19.6238C34.2395 26.7038 38.9433 29.9287 43.3157 29.9287C47.6881 29.9287 50.3509 26.822 51.2872 23.915L51.2722 23.8965C49.4465 25.1883 47.6713 25.8426 45.9972 25.8426C42.4244 25.8426 40.5163 22.9688 40.4751 17.5299C40.4582 15.9055 40.6305 12.9781 41.975 11.6179C42.4356 11.1522 42.9937 10.9157 43.6341 10.9157C46.692 10.9157 50.0064 16.5763 50.4932 17.4375H50.5232L50.4296 11.7399C50.4239 11.4072 50.2198 11.1097 49.909 10.9822C49.894 10.9766 49.879 10.9693 49.8641 10.9637C48.3566 10.3409 46.0778 9.40024 43.4581 9.40024C40.8384 9.40024 38.4527 10.3224 36.8217 12.0689C35.1346 13.8744 34.2414 16.4876 34.2414 19.6256L34.2395 19.6238Z" fill="currentColor"></path>
<path d="M25.3168 9.63495V9.70148C25.3224 9.74768 25.3692 9.93064 25.4348 10.1857C25.7063 11.2483 26.3392 13.7377 26.3392 16.0256V23.1C26.3392 25.3879 25.7044 27.8791 25.4329 28.9418C25.3692 29.195 25.3224 29.3779 25.3149 29.4352V29.4925H33.0298V29.426C33.0242 29.3798 32.9774 29.1968 32.9137 28.9436C32.6422 27.881 32.0074 25.3898 32.0074 23.1019V10.4721C32.0074 10.0101 31.6273 9.63495 31.1592 9.63495H25.3149H25.3168Z" fill="currentColor"></path>
<path d="M86.4592 22.8468L86.5659 22.7212L86.6165 22.8783C87.5733 25.8241 86.6408 29.1673 86.5622 29.4389V29.4925H96.0747V29.4537C95.0223 27.8182 94.0655 25.6596 93.1517 22.8542L86.1015 1.78987C85.9873 1.44613 85.6615 1.21512 85.2963 1.21512L74.1509 1.22436C72.6285 1.22436 71.417 1.83238 70.5481 3.03362C68.8572 5.37144 68.6662 9.83269 70.0744 14.135C70.9245 16.7316 72.2334 19.0638 73.8588 20.8823C73.8756 20.9008 73.8906 20.9175 73.9094 20.9341L74.5011 21.5107L74.4824 21.5661C73.3963 24.8502 72.1623 27.7867 71.3664 29.4482V29.4944H76.7182V29.389C76.7088 29.3632 76.6807 29.2726 76.6377 29.1451C76.3568 28.2765 75.501 25.6319 75.8512 22.9282L75.8737 22.76L76.1339 22.9818C79.1993 25.3454 83.5848 26.2233 86.461 22.8487L86.4592 22.8468ZM80.7928 7.28235C81.0512 7.69447 81.2872 8.10474 81.4913 8.50208C82.4987 10.4426 83.229 12.7878 83.4949 14.9371C83.817 17.5336 83.465 19.7532 82.48 21.3554C81.9257 22.2573 81.216 22.7951 80.3734 22.9522C80.203 22.9836 80.027 23.0002 79.8435 23.0002C78.7911 23.0002 77.5552 22.4754 76.2276 21.4608L76.177 21.422L76.6676 19.8474H76.7163L77.2425 18.1731H77.2088L80.6842 7.11417L80.791 7.28235H80.7928ZM74.8906 20.2928L74.7838 20.1838C73.2483 18.6092 71.8364 16.1882 70.9095 13.5381C69.9302 10.7327 69.6456 8.11953 70.1081 6.1809C70.5931 4.14986 71.6417 2.79707 73.0592 2.37201C74.6528 1.89151 76.559 2.59378 78.4241 4.34576C78.763 4.66548 79.1132 5.03694 79.4596 5.45091L79.4839 5.48048L79.4802 5.51929C79.4446 5.85009 79.3809 6.16242 79.2929 6.44887L74.8887 20.2946L74.8906 20.2928Z" fill="currentColor"></path>
<path d="M161.575 9.39839C157.017 9.39839 152.146 12.0541 152.146 19.5055C152.146 26.957 157.225 29.9287 161.575 29.9287C168.088 29.9287 171.003 24.6931 171.003 19.5055C171.003 14.8428 168.533 9.39839 161.575 9.39839ZM161.575 28.4114C160.197 28.4114 158.556 26.8664 158.556 19.5037C158.556 15.5673 159.081 10.8732 161.575 10.8732C164.331 10.8732 164.629 16.909 164.629 19.5037C164.629 22.0984 164.331 28.4114 161.575 28.4114Z" fill="currentColor"></path>
<path d="M178.963 14.2108C179.928 13.5621 180.855 13.2461 181.8 13.2461C182.678 13.2701 184.714 13.6637 184.714 16.8166V23.1019C184.714 25.3953 184.1 27.8865 183.838 28.951C183.776 29.2005 183.731 29.3798 183.725 29.4371V29.4944H191.44V29.4278C191.434 29.4094 191.412 29.3317 191.382 29.219C191.142 28.3282 190.418 25.6189 190.418 23.1037V15.9092C190.418 11.9543 188.171 9.40024 184.691 9.40024C181.523 9.40024 179.827 11.6734 179.096 13.028L178.924 13.3477V10.474C178.924 10.012 178.544 9.63679 178.076 9.63679H172.231V9.70332C172.237 9.74952 172.282 9.92694 172.342 10.1746C172.604 11.2391 173.218 13.7303 173.218 16.0274V23.1019C173.218 25.399 172.604 27.8921 172.342 28.9566C172.282 29.2024 172.237 29.3816 172.231 29.4371V29.4925H179.948V29.426C179.943 29.3798 179.896 29.1987 179.832 28.9473C179.561 27.8847 178.926 25.3935 178.926 23.1019V14.2385L178.967 14.2108H178.963Z" fill="currentColor"></path>
<path d="M101.505 29.9268C103.881 29.9268 105.357 28.5555 106.271 26.944C106.621 26.3249 106.091 25.5912 105.383 25.7077C105.164 25.7428 104.953 25.7613 104.75 25.7613C103.645 25.7613 102.331 25.2456 102.331 22.784L102.297 12.1465C102.297 11.6826 102.675 11.3075 103.146 11.3075H106.207C106.675 11.3075 107.055 10.9323 107.055 10.4703C107.055 10.0083 106.675 9.6331 106.207 9.6331H103.144C102.675 9.6331 102.295 9.25794 102.295 8.79592V4.92235C102.295 4.1554 101.335 3.79133 100.818 4.36239C98.936 6.44886 96.9418 8.03821 94.4812 9.43535C94.2172 9.58505 94.0505 9.86041 94.0505 10.1616V10.4703C94.0505 10.9323 94.4307 11.3075 94.8988 11.3075H95.777C96.2452 11.3075 96.6253 11.6826 96.6253 12.1446V23.416C96.6253 27.552 98.4042 29.925 101.505 29.925V29.9268Z" fill="currentColor"></path>
<path d="M141.237 9.39839C136.679 9.39839 131.809 12.0541 131.809 19.5055C131.809 26.957 136.887 29.9287 141.237 29.9287C147.75 29.9287 150.665 24.6931 150.665 19.5055C150.665 14.8428 148.195 9.39839 141.237 9.39839ZM141.237 28.4114C139.859 28.4114 138.218 26.8664 138.218 19.5037C138.218 15.5673 138.743 10.8732 141.237 10.8732C143.993 10.8732 144.291 16.909 144.291 19.5037C144.291 22.0984 143.993 28.4114 141.237 28.4114Z" fill="currentColor"></path>
<path d="M131.303 1.34818V1.21697H125.809V1.35557C125.826 1.44798 125.914 1.71595 126.037 2.08371C126.56 3.65273 127.784 7.32486 127.784 10.6902V18.0991C127.784 18.9492 126.648 19.2579 126.208 18.5279L116.004 1.62354C115.851 1.37036 115.575 1.21512 115.276 1.21512H108.319V1.28165C108.331 1.32415 108.4 1.51451 108.488 1.75476C108.902 2.87839 109.87 5.5082 109.87 7.92363V20.0193C109.87 23.3846 108.645 27.0586 108.123 28.6258C107.997 29.0028 107.907 29.2744 107.894 29.3613V29.4925H113.424V29.3465C113.409 29.2929 113.34 29.0896 113.242 28.8087C112.742 27.3635 111.415 23.5232 111.415 20.0193V9.3485C111.415 8.50023 112.548 8.18975 112.989 8.9179L125.275 29.0878C125.429 29.3391 125.704 29.4944 126.002 29.4944H128.479C128.947 29.4944 129.327 29.1192 129.327 28.6572V10.6902C129.327 7.32486 130.552 3.65088 131.075 2.08371C131.2 1.70671 131.292 1.43504 131.303 1.34818Z" fill="currentColor"></path>
</g>

</svg>
    <div className='flex items-center justify-between w-[55%]'>
    <svg id='smile' xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 52 52" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M30.3896 9.14282C24.6861 7.6493 18.4743 9.19413 14.143 13.2244C13.9623 13.3897 13.7816 13.5664 13.6122 13.7431C6.79616 20.6236 6.79051 31.8193 13.6122 38.6998C20.4282 45.5802 31.519 45.5802 38.3351 38.6998C40.6221 36.3911 42.1977 33.5579 42.9431 30.4341L40.1139 29.8412C39.4758 32.4065 38.1713 34.7208 36.2852 36.6248C30.5986 42.3652 21.3543 42.3595 15.6677 36.6248C9.98111 30.8844 9.97546 21.5528 15.6677 15.8124C19.5981 11.8448 25.584 10.4824 30.8188 12.3408C33.6141 13.327 35.8842 15.3449 37.5614 17.7619C38.7473 19.4778 39.3572 22.9266 38.2052 24.4771L37.6348 24.9958C35.4663 26.2613 32.7275 23.2971 32.7275 23.2971L27.6339 18.1553C25.6913 16.1943 23.184 16.0347 21.439 17.7961C20.1402 19.1072 19.6715 21.0454 20.0385 23.6676L19.9143 23.793L17.5425 21.7295L17.3618 21.9119L15.1369 26.4609L15.2329 26.5578L17.5595 26.6547L26.6287 35.8096L26.7868 37.8504L26.9054 37.9701L31.4456 33.3869L31.327 33.2672L29.2828 33.1247L20.8404 24.6025C20.8348 23.0406 21.1962 21.8948 21.9247 21.1537C22.9807 20.0877 24.4037 20.2188 25.663 21.49L30.847 26.3696C32.287 27.8803 34.4838 29.1287 36.4546 28.8779C40.1478 28.4161 41.9153 24.9445 41.6725 21.2791C41.5991 20.1903 41.3506 19.0901 40.9214 18.0413C39.0409 13.4353 35.0259 10.3513 30.3783 9.13712L30.3896 9.14282Z" fill="currentColor"></path>
<path d="M25.9397 51.6C12.0931 51.6 0.827148 40.2276 0.827148 26.25C0.827148 12.2724 12.0931 0.899994 25.9397 0.899994C39.7863 0.899994 51.0522 12.2724 51.0522 26.25C51.0522 40.2276 39.7863 51.6 25.9397 51.6ZM25.9397 2.35361C13.6629 2.34791 3.67327 13.0705 3.67327 26.25C3.67327 39.4295 13.6629 50.1464 25.9397 50.1464C38.2164 50.1464 48.2061 39.4238 48.2061 26.25C48.2061 13.0762 38.2164 2.34791 25.9397 2.34791V2.35361Z" fill="currentColor"></path>
</svg>
    <div className='flex itmes-center gap-5'>
            <Button text="Project" />
            <Button text="Over" />
            <Button text="Contact" />
    </div>
    </div>
    </div>
  ) 
}

export default Navbar