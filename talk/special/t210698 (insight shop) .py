# -*- coding: utf-8 -*-
def t210698_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210698_x3()
        assert IsClientPlayer() == 1
        """State 2"""
        call = t210698_x4()
        assert not IsClientPlayer()

# insight shop

def t210698_x0(actionbutton1=6018, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001, flag6=6001,
               flag7=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventStatus(flag1) == 1 or GetEventStatus(flag2) == 1 or GetEventStatus(flag3) ==
                1 or GetEventStatus(flag4) == 1 or GetEventStatus(flag5) == 1 or GetEventStatus(flag6)
                == 1 or GetEventStatus(flag7) == 1)
        """State 2"""
        def ExitPause():
            SetTalkTime(0.5)
        if (not GetEventStatus(flag1) and not GetEventStatus(flag2) and not GetEventStatus(flag3) and
            not GetEventStatus(flag4) and not GetEventStatus(flag5) and not GetEventStatus(flag6) and
            not GetEventStatus(flag7)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
              and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    return 0

def t210698_x1():
    """State 0"""
    if GetEventStatus(6711) == 1 and GetEventStatus(12105045) == 1:
        while True:
            """State 2"""
            Label('L0')
            ClearTalkListData()
            """State 3"""
            AddTalkListData(1, 15000140, -1)
            AddTalkListData(50, 15000005, -1)
            """State 7"""
            SetEventState(12105044, 1)
            """State 4"""
            ShowShopMessage(0, 0, 0)
            def WhilePaused():
                SetTalkTime(0.33)
            if not GetTalkListEntryResult() or GetTalkListEntryResult() == 50:
                break
            elif GetTalkListEntryResult() == 1:
                """State 5"""
                DebugEvent('購入')
                """State 1"""
                if GetEventStatus(12100848) == 1:
                    c1_86(200000, 200199)
                else:
                    c1_86(200000, 200099)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(370, 0)
        """State 6"""
        DebugEvent('立ち去る')
    elif GetEventStatus(12105045) == 1:
        """State 8"""
        OpenGenericDialog(1, 10011190, 1, 0, 1)
        """State 9"""
        SetEventState(6711, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
        Goto('L0')
    else:
        """State 10"""
        OpenGenericDialog(7, 10011180, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 11"""
    return 0

def t210698_x2():
    """State 0,1"""
    ForceCloseMenu()
    """State 2"""
    return 0

def t210698_x3():
    """State 0"""
    while True:
        """State 3"""
        assert (t210698_x0(actionbutton1=6018, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001,
                flag6=6001, flag7=6001))
        """State 1"""
        call = t210698_x1()
        def ExitPause():
            SetEventState(12105044, 0)
        if call.Done():
            pass
        elif GetDistanceToPlayer() > 3:
            """State 2"""
            assert t210698_x2()
    """Unused"""
    """State 4"""
    return 0

def t210698_x4():
    """State 0,1"""
    DebugEvent('ゲスト待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

