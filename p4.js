var numberOfSteps = function(num) {
    let c=0;
    while(num>0)
    {
        if(num%2==0)
        {
            num=num/2;
            c++;
        }
        else
        {
            num=num-1;
            c++;
        }
    }
    if(num==0)
    {
        return c;
    }
};
