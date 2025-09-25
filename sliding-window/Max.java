import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;

class Max{
    Deque<Integer> deque;

    Max(){
        this.deque = new LinkedList<>();
    }

    public int[] maxSlidingWindow(int[] nums, int k)
    {

        ArrayList<Integer> result = new ArrayList<>();

        if(nums.length == 0 || k==0){
            return nums;
        }

        for(int i=0; i<nums.length;i++){
            while(!deque.isEmpty() &&  deque.getFirst() <= i-k){
                deque.removeFirst();
            }

            while ( !deque.isEmpty() && nums[deque.getLast()] <=nums[i]){

                deque.removeLast();

            }
            deque.addLast(i);
            if(i >= k-1){

                result.add(nums[deque.getFirst()]);
            }


        }
        int[] ans = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            ans[i] = result.get(i);
        }
        return ans;

    }

    public static void main(String[] args) {
        Max max = new Max();
        var res = max.maxSlidingWindow(new int[]{1,-1}, 1);
        for (int num : res) {
            System.out.println(num);
        }
    }
}