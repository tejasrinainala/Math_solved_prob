var differenceOfSums = function(n, m) {
    let s=0,nd=0,res;
    for(let i=1;i<=n;i++)
    {
        if(i%m==0)
        {
            s=s+i;
        }
        else{
            nd=nd+i;
        }
    }
    res=nd-s;
    return res;
};
