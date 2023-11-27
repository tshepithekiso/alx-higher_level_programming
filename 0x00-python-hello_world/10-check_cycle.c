#include "lists.h"

/**
 * check_cycle - check if a linked lists contain a cycle
 * @list: linked lists to check
 *
 * Return: 1 if positive, 0 if negative
 */
int check_cycle(listint_t *list)
{
	listint_t *slow = list;
	listint_t *fast = list;
	
	if (list == NULL || list->next == NULL)
		return(0);
	while (slow && fast && fast->next)
	{
		slow = slow->next;
		fast = fast->next->next;
		if (slow == fast)
			return (1);
	}

	return (0);
}
